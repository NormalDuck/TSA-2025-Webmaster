"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Footer from "@/components/footer";

// ── Events Data ──────────────────────────────────────────────────────────────
const EVENTS = [
  {
    id: 1,
    date: '2026-03-17',
    type: 'WORKSHOP',
    title: 'Resume & Interview Skills',
    detail: 'Main Hub  ·  10am – 1pm  ·  Free',
    location: 'Main Hub, 123 Community Ave, Seattle WA',
    description: 'Get hands-on help crafting a standout resume and practice interview techniques with experienced coaches. Open to all job seekers — no experience required. Walk-ins welcome.',
    spots: 20,
    spotsLeft: 7,
    host: 'Career Services Team',
  },
  {
    id: 2,
    date: '2026-03-26',
    type: 'HEALTH CLINIC',
    title: 'Community Health Screening',
    detail: 'Main Hub  ·  10am – 1pm  ·  Free',
    location: 'Main Hub, 123 Community Ave, Seattle WA',
    description: 'Free screenings for blood pressure, cholesterol, blood sugar, and BMI. Bilingual staff available. No appointment needed — first come, first served.',
    spots: 50,
    spotsLeft: 22,
    host: 'Lahai Health Partners',
  },
  {
    id: 3,
    date: '2026-04-04',
    type: 'WORKSHOP',
    title: 'Resume & Interview Skills',
    detail: 'Main Hub  ·  10am – 1pm  ·  Free',
    location: 'Main Hub, 123 Community Ave, Seattle WA',
    description: 'Get hands-on help crafting a standout resume and practice interview techniques with experienced coaches. Open to all job seekers — no experience required. Walk-ins welcome.',
    spots: 20,
    spotsLeft: 14,
    host: 'Career Services Team',
  },
  {
    id: 4,
    date: '2026-04-11',
    type: 'WORKSHOP',
    title: 'Small Business Basics',
    detail: 'Room B  ·  9am – 12pm  ·  Free',
    location: 'Room B, 123 Community Ave, Seattle WA',
    description: 'Learn the essentials of starting and running a small business. Presented by local entrepreneurs.',
    spots: 15,
    spotsLeft: 3,
    host: 'Small Business Development Center',
  },
  {
    id: 5,
    date: '2026-04-18',
    type: 'COMMUNITY EVENT',
    title: 'Spring Community Fair',
    detail: 'Main Hall  ·  11am – 3pm  ·  Free',
    location: 'Main Hall, 123 Community Ave, Seattle WA',
    description: 'Our biggest community gathering of the spring! Meet local organizations, enjoy live music, kids activities, food vendors, and resource tables. All ages welcome.',
    spots: 300,
    spotsLeft: 180,
    host: 'WAsHub Events Team',
  },
  {
    id: 6,
    date: '2026-05-02',
    type: 'WORKSHOP',
    title: 'Digital Skills Bootcamp',
    detail: 'Main Hub  ·  10am – 2pm  ·  Free',
    location: 'Main Hub, 123 Community Ave, Seattle WA',
    description: 'A half-day bootcamp covering email, job searching online, using Google Docs, video calls, and staying safe on the internet. Laptops provided. All skill levels welcome.',
    spots: 18,
    spotsLeft: 11,
    host: 'Per Scholas Digital Inclusion',
  },
  {
    id: 7,
    date: '2026-05-15',
    type: 'HEALTH CLINIC',
    title: 'Mental Health Open Day',
    detail: 'Wellness Room  ·  10am – 4pm  ·  Free',
    location: 'Wellness Room, 123 Community Ave, Seattle WA',
    description: 'Drop in for free one-on-one conversations with licensed counselors, mindfulness sessions, and resource tables. Confidential and judgment-free. All backgrounds welcome.',
    spots: 40,
    spotsLeft: 28,
    host: 'THIRA Health',
  },
];

const TYPE_COLOR: Record<string, string> = {
  'WORKSHOP':        '#FD6900',
  'HEALTH CLINIC':   '#52AD6A',
  'COMMUNITY EVENT': '#E0A959',
};

const MONTHS     = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAY_LABELS = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
const FILTERS    = ['ALL', 'WORKSHOP', 'HEALTH CLINIC', 'COMMUNITY EVENT'] as const;
type Filter   = (typeof FILTERS)[number];
type ViewMode = 'calendar' | 'list';

function isoDate(y: number, m: number, d: number) {
  return `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
}

function formatGoogleCalUrl(ev: typeof EVENTS[0]) {
  const [y, m, d] = ev.date.split('-');
  const start = `${y}${m}${d}T100000`;
  const end   = `${y}${m}${d}T130000`;
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(ev.title)}&dates=${start}/${end}&details=${encodeURIComponent(ev.description)}&location=${encodeURIComponent(ev.location)}`;
}

// ── Spot availability bar ────────────────────────────────────────────────────
function SpotBar({ total, left }: { total: number; left: number }) {
  const pct   = Math.round((left / total) * 100);
  const color = pct < 20 ? '#e05252' : pct < 50 ? '#E0A959' : '#52AD6A';
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-[12px] font-bold tracking-wide uppercase text-[#999]">Availability</span>
        <span className="text-[12px] font-bold" style={{ color }}>{left} spots left</span>
      </div>
      <div className="h-1.5 bg-[#f0ede7] rounded-full overflow-hidden">
        <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, background: color }} />
      </div>
    </div>
  );
}

// ── Event detail modal ───────────────────────────────────────────────────────
function EventModal({ ev, onClose, saved, onToggleSave }: {
  ev: typeof EVENTS[0];
  onClose: () => void;
  saved: boolean;
  onToggleSave: () => void;
}) {
  const color = TYPE_COLOR[ev.type] ?? '#FD6900';
  const [, m, d] = ev.date.split('-');
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard?.writeText(`${window.location.origin}/events?id=${ev.id}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(16,15,10,0.6)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div
        className="bg-[#FEFCF8] rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl"
        style={{ border: `1.5px solid ${color}40` }}
        onClick={e => e.stopPropagation()}
      >
        <div className="h-1.5 w-full" style={{ background: color }} />
        <div className="p-7">
          {/* Header */}
          <div className="flex items-start justify-between mb-5">
            <div>
              <span className="inline-block text-[9px] font-black tracking-[0.18em] uppercase px-2.5 py-1 rounded-full mb-2" style={{ background: `${color}18`, color }}>{ev.type}</span>
              <h2 className="font-black text-[22px] text-[#100F0A] leading-tight">{ev.title}</h2>
              <p className="text-[12px] text-[#888] mt-2">{ev.host}</p>
            </div>
            <button onClick={onClose} className="w-8 h-8 rounded-full bg-[#f0ede7] flex items-center justify-center text-[#555] hover:bg-[#e0ddd7] transition-colors text-sm shrink-0 mt-1">✕</button>
          </div>

          {/* Date / location tiles */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="bg-[#f8f5f0] rounded-2xl p-3">
              <p className="text-[9px] font-black tracking-widest text-[#999] uppercase mb-1">Date</p>
              <p className="text-[11px] font-black text-[#555] mt-0.5">{MONTHS[parseInt(m)-1]}</p>
              <p className="font-black text-[#100F0A] text-[22px] leading-none">{parseInt(d)}</p>
            </div>
            <div className="bg-[#f8f5f0] rounded-2xl p-3">
              <p className="text-[9px] font-black tracking-widest text-[#999] uppercase mb-1.5">Location</p>
              <p className="text-[13px] font-black text-[#100F0A] leading-snug">{ev.location.split(',')[0]}</p>
              <p className="text-[12px] text-[#999] ">{ev.detail.split('·')[1]?.trim()}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-[13px]  text-[#100F0A] leading-relaxed mb-5">{ev.description}</p>

          {/* Spot bar */}
          <div className="mb-6"><SpotBar total={ev.spots} left={ev.spotsLeft} /></div>

          {/* Actions */}
          <div className="flex gap-2 flex-wrap">
            <a
              href={formatGoogleCalUrl(ev)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full text-[10px] font-bold tracking-wide uppercase text-white transition-all hover:scale-105"
              style={{ background: color }}
            >
              📅 Add to Calendar
            </a>
            <button
              onClick={onToggleSave}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full text-[12px] font-bold tracking-wide uppercase transition-all hover:scale-105"
              style={{
                background: saved ? `${color}18` : 'transparent',
                color: saved ? color : '#999',
                border: `1.5px solid ${saved ? color : '#ddd'}`,
              }}
            >
              {saved ? '★ Saved' : '☆ Save'}
            </button>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full text-[12px] font-bold tracking-wide uppercase border border-[#ddd] text-[#999] hover:border-[#100F0A] hover:text-[#100F0A] transition-all"
            >
              {copied ? '✓ Copied!' : '↑ Share'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EventsPage() {
  const today    = new Date();
  const todayISO = isoDate(today.getFullYear(), today.getMonth(), today.getDate());

  const [viewYear,      setViewYear]      = useState(today.getFullYear());
  const [viewMonth,     setViewMonth]     = useState(today.getMonth());
  const [selectedDate,  setSelectedDate]  = useState<string | null>(null);
  const [filter,        setFilter]        = useState<Filter>('ALL');
  const [viewMode,      setViewMode]      = useState<ViewMode>('calendar');
  const [search,        setSearch]        = useState('');
  const [savedIds,      setSavedIds]      = useState<Set<number>>(new Set());
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [modalEvent,    setModalEvent]    = useState<typeof EVENTS[0] | null>(null);

  // ── Month nav ─────────────────────────────────────────────────────────────
  const goToPrev = () => { if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y-1); } else setViewMonth(m => m-1); setSelectedDate(null); };
  const goToNext = () => { if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y+1); } else setViewMonth(m => m+1); setSelectedDate(null); };

  // ── Build calendar cells ──────────────────────────────────────────────────
  const firstDay      = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth   = new Date(viewYear, viewMonth + 1, 0).getDate();
  const prevMonthDays = new Date(viewYear, viewMonth, 0).getDate();
  const cells: { iso: string; day: number; currentMonth: boolean }[] = [];
  for (let i = 0; i < firstDay; i++) {
    const d = prevMonthDays - firstDay + 1 + i;
    cells.push({ iso: isoDate(viewMonth === 0 ? viewYear-1 : viewYear, viewMonth === 0 ? 11 : viewMonth-1, d), day: d, currentMonth: false });
  }
  for (let d = 1; d <= daysInMonth; d++) cells.push({ iso: isoDate(viewYear, viewMonth, d), day: d, currentMonth: true });
  const rem = cells.length % 7 === 0 ? 0 : 7 - (cells.length % 7);
  for (let d = 1; d <= rem; d++) cells.push({ iso: isoDate(viewMonth === 11 ? viewYear+1 : viewYear, viewMonth === 11 ? 0 : viewMonth+1, d), day: d, currentMonth: false });

  const eventsByDate = useMemo(() => EVENTS.reduce<Record<string, typeof EVENTS>>((acc, e) => {
    acc[e.date] = acc[e.date] ? [...acc[e.date], e] : [e]; return acc;
  }, {}), []);

  // ── Filtered events ───────────────────────────────────────────────────────
  const filteredEvents = useMemo(() => EVENTS
    .filter(e => filter === 'ALL' || e.type === filter)
    .filter(e => !showSavedOnly || savedIds.has(e.id))
    .filter(e => !search || e.title.toLowerCase().includes(search.toLowerCase()) || e.type.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => a.date.localeCompare(b.date)),
  [filter, showSavedOnly, savedIds, search]);

  const upcomingFiltered = filteredEvents.filter(e => e.date >= todayISO);

  const panelEvents = selectedDate
    ? EVENTS.filter(e => e.date === selectedDate)
    : upcomingFiltered.slice(0, 4);

  const panelHeading = selectedDate
    ? (() => { const [,m,d] = selectedDate.split('-'); return `${MONTHS[parseInt(m)-1]} ${parseInt(d)}`; })()
    : 'Next up';

  const toggleSave = (id: number) => setSavedIds(prev => {
    const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next;
  });

  return (
    <div className="min-h-screen bg-[#FEFCF8]">
      {modalEvent && (
        <EventModal
          ev={modalEvent}
          onClose={() => setModalEvent(null)}
          saved={savedIds.has(modalEvent.id)}
          onToggleSave={() => toggleSave(modalEvent.id)}
        />
      )}

      {/* ── Header ───────────────────────────────────────────────────────── */}
      <div className="w-full px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 pt-28 pb-10 border-b border-[#e0ddd7]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h1 className="text-[clamp(36px,6vw,72px)] font-black leading-[.8] tracking-tight text-[#100F0A]">
            <span className="text-[#FD6900]">Join us</span><br />in person
          </h1>
        </div>
      </div>

      {/* ── Controls ─────────────────────────────────────────────────────── */}
      <div className="w-full px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 py-4 border-b border-[#e0ddd7]">
        <div className="flex flex-wrap items-center gap-3">
          {/* Search */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9a8a7a] text-sm">⌕</span>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search events…"
              className="pl-8 pr-4 py-2 rounded-full text-[13px] font-medium bg-[#f0ede7] text-[#100F0A] placeholder:text-[#9a8a7a] outline-none border border-transparent focus:border-[#FD6900] transition-colors w-44"
            />
          </div>

          {/* Type filters */}
          {FILTERS.map(f => {
            const active = filter === f;
            const color  = f !== 'ALL' ? TYPE_COLOR[f] : '#100F0A';
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="px-3 py-1.5 rounded-full text-[12px] font-bold tracking-wide uppercase transition-all duration-200"
                style={{ background: active ? color : 'transparent', color: active ? '#fff' : '#888', border: `1.5px solid ${active ? color : '#ddd'}` }}
              >
                {f === 'ALL' ? 'All' : f.charAt(0) + f.slice(1).toLowerCase()}
              </button>
            );
          })}

          {/* Saved */}
          <button
            onClick={() => setShowSavedOnly(v => !v)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-bold tracking-wide uppercase transition-all duration-200"
            style={{
              background: showSavedOnly ? '#FD690018' : 'transparent',
              color: showSavedOnly ? '#FD6900' : '#888',
              border: `1.5px solid ${showSavedOnly ? '#FD6900' : '#ddd'}`,
            }}
          >
            ★ Saved {savedIds.size > 0 && `(${savedIds.size})`}
          </button>

          {/* View toggle */}
          <div className="ml-auto flex items-center gap-1 bg-[#f0ede7] rounded-full p-1">
            {(['calendar', 'list'] as ViewMode[]).map(mode => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className="px-4 py-2 rounded-full text-[10px] font-bold tracking-wide uppercase transition-all duration-200"
                style={{ background: viewMode === mode ? '#100F0A' : 'transparent', color: viewMode === mode ? '#FEFCF8' : '#888' }}
              >
                {mode === 'calendar' ? '⊞ Cal' : '≡ List'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Calendar view ────────────────────────────────────────────────── */}
      {viewMode === 'calendar' && (
        <div className="w-full px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* Left: Calendar grid */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-extrabold text-[24px] text-[#100F0A]">{MONTHS[viewMonth]}</span>
                <span className="font-extrabold text-[24px] text-[#100F0A]">{viewYear}</span>
                <button onClick={goToPrev} className="w-7 h-7 border border-[#ddd] rounded flex items-center justify-center text-sm hover:border-[#FD6900] hover:text-[#FD6900] transition-colors">‹</button>
                <button onClick={goToNext} className="w-7 h-7 border border-[#ddd] rounded flex items-center justify-center text-sm hover:border-[#FD6900] hover:text-[#FD6900] transition-colors">›</button>
              </div>

              <div className="grid grid-cols-7 mb-1">
                {DAY_LABELS.map(d => (
                  <div key={d} className="text-center text-[10px] font-black tracking-wide text-[#bbb] uppercase py-1">{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-y-0.5">
                {cells.map((cell, i) => {
                  const isToday    = cell.iso === todayISO;
                  const isSelected = cell.iso === selectedDate;
                  const cellEvs   = eventsByDate[cell.iso];
                  const hasEvent  = !!cellEvs && cell.currentMonth;
                  return (
                    <div
                      key={i}
                      className={`aspect-square flex flex-col items-center justify-center relative
                        ${!cell.currentMonth ? 'text-[#ccc]' : 'text-[#100F0A]'}
                        ${hasEvent ? 'cursor-pointer' : ''}
                      `}
                      onClick={() => hasEvent && setSelectedDate(prev => prev === cell.iso ? null : cell.iso)}
                    >
                      <span className={`w-15 h-15 flex items-center justify-center rounded-full text-[14px] font-bold transition-all duration-150
                        ${isSelected ? 'bg-[#FD6900] text-white' : ''}
                        ${isToday && !isSelected ? 'bg-[#100F0A] text-[#FEFCF8]' : ''}
                        ${hasEvent && !isSelected && !isToday ? 'hover:bg-[#fff3ea]' : ''}
                      `}>{cell.day}</span>
                      {hasEvent && (
                        <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 flex gap-0.5">
                          {cellEvs.slice(0, 3).map((e, di) => (
                            <span key={di} className="w-2 h-2 rounded-full" style={{ background: isSelected || isToday ? '#fff' : TYPE_COLOR[e.type] ?? '#FD6900' }} />
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              {/* Legend */}
              <div className="mt-6 pt-5 border-t border-[#e0ddd7] flex flex-wrap gap-4">
                {Object.entries(TYPE_COLOR).map(([type, color]) => (
                  <div key={type} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ background: color }} />
                    <span className="text-[11px] font-bold tracking-wide text-[#999] uppercase">{type.charAt(0) + type.slice(1).toLowerCase()}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Event panel */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-black text-[24px] text-[#100F0A]">{panelHeading}</span>
                {selectedDate && (
                  <button onClick={() => setSelectedDate(null)} className="text-[12px] font-bold tracking-wide uppercase text-[#999] hover:text-[#FD6900] transition-colors">Clear ✕</button>
                )}
              </div>

              <div className="divide-y divide-[#e0ddd7]">
                {panelEvents.length === 0 ? (
                  <p className="py-10 text-sm text-center text-[#bbb]">No events on this day.</p>
                ) : panelEvents.map((ev) => {
                  const [, m, d] = ev.date.split('-');
                  const color    = TYPE_COLOR[ev.type] ?? '#FD6900';
                  const saved    = savedIds.has(ev.id);
                  return (
                    <div key={ev.id} className="flex items-start gap-5 py-4 group cursor-pointer" onClick={() => setModalEvent(ev)}>
                      <div className="min-w-13 text-center shrink-0">
                        <div className="font-extrabold text-[30px] leading-none mt-6" style={{ color }}>{parseInt(d)}</div>
                        <div className="text-[12px] font-black tracking-wide text-[#999] uppercase mt-0.5">{MONTHS[parseInt(m)-1].slice(0,3)}</div>
                      </div>
                      <div className="w-px self-stretch shrink-0 bg-[#e0ddd7]" />
                      <div className="flex-1 min-w-0">
                        <span className="inline-block text-[10px] font-black tracking-[0.18em] uppercase px-2.5 py-1 rounded-full mb-1.5" style={{ background: `${color}18`, color }}>{ev.type}</span>
                        <div className="font-extrabold text-[#100F0A] text-[15px] tracking-wide leading-none group-hover:text-[#FD6900] transition-colors duration-150">{ev.title}</div>
                        <div className="text-[12px] text-[#999] mt-1">{ev.detail}</div>
                        {ev.spotsLeft <= 5 && <div className="mt-1.5 text-[10px] font-black text-[#e05252] tracking-wide">⚠ Only {ev.spotsLeft} spots left</div>}
                      </div>
                      <div className="flex flex-col items-center shrink-0 self-center">
                        <button onClick={e => { e.stopPropagation(); toggleSave(ev.id); }} className="text-[25px] transition-all" style={{ color: saved ? '#FD6900' : '#999' }}>{saved ? '★' : '☆'}</button>
                        <span className="text-[#999] group-hover:text-[#FD6900] transition-colors text-lg">→</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── List view ────────────────────────────────────────────────────── */}
      {viewMode === 'list' && (
        <div className="w-full px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 py-12">
          {upcomingFiltered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#bbb] text-sm font-bold">No events match your filters.</p>
              <button onClick={() => { setFilter('ALL'); setSearch(''); setShowSavedOnly(false); }} className="mt-3 text-[10px] font-black tracking-widest uppercase text-[#FD6900] hover:underline">Clear filters</button>
            </div>
          ) : (
            <div className="space-y-3">
              {upcomingFiltered.map((ev, i) => {
                const [, m, d] = ev.date.split('-');
                const color    = TYPE_COLOR[ev.type] ?? '#FD6900';
                const saved    = savedIds.has(ev.id);
                return (
                  <div
                    key={ev.id}
                    className="group flex items-center gap-5 bg-white border border-[#e0ddd7] rounded-2xl px-6 py-5 cursor-pointer hover:border-[#FD6900] hover:shadow-md transition-all duration-200"
                    style={{ animationDelay: `${i * 40}ms` }}
                    onClick={() => setModalEvent(ev)}
                  >
                    <div className="min-w-20 text-center shrink-0">
                      <div className="font-black text-[28px] leading-none" style={{ color }}>{parseInt(d)}</div>
                      <div className="text-[12px] font-black tracking-widest text-[#aaa] uppercase">{MONTHS[parseInt(m)-1].slice(0,3)}</div>
                    </div>
                    <div className="w-px h-10 shrink-0 bg-[#e0ddd7]" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-[9px] font-black tracking-[0.18em] uppercase px-2 py-0.5 rounded-full" style={{ background: `${color}18`, color }}>{ev.type}</span>
                        {ev.spotsLeft <= 5 && <span className="text-[12px] font-bold text-[#e05252]">⚠ {ev.spotsLeft} spots left</span>}
                      </div>
                      <div className="font-extrabold text-[#100F0A] text-[15px] leading-snug group-hover:text-[#FD6900] transition-colors duration-150">{ev.title}</div>
                      <div className="text-[12px] text-[#999] mt-0.5">{ev.detail}</div>
                    </div>
                      <div className="flex items-center gap-8 shrink-0">
                        <div className="hidden sm:block w-24 md:w-30 lg:w-70 shrink-0">
                          <SpotBar total={ev.spots} left={ev.spotsLeft} />
                        </div>
                        <button onClick={e => { e.stopPropagation(); toggleSave(ev.id); }} className="text-[25px] transition-all" style={{ color: saved ? '#FD6900' : '#999' }}>{saved ? '★' : '☆'}</button>
                        <span className="text-[#999] group-hover:text-[#FD6900] text-lg transition-colors">→</span>
                      </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ── bottom bar ──────────────────────────────────────────────────────── */}
      <div className="w-full px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 pb-20">
        <div className="w-full h-px bg-[#e0ddd7] mb-8" />
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-end gap-4">
          <div className="flex gap-2">
            <Link href="/">
              <button className="flex items-center gap-2 px-5 py-3 rounded-full text-[11px] font-black tracking-widest border border-[#999] text-[#555] hover:border-[#100F0A] hover:text-[#100F0A] transition-all w-fit">
                ← Back Home
              </button>
            </Link>
            <button className="flex items-center gap-2 px-5 py-3 rounded-full text-[12px] font-bold tracking-wide bg-[#100F0A] text-white hover:scale-105 transition-all w-fit">
              <span className="w-5 h-5 rounded-full bg-[#2a2a24] flex items-center justify-center">📅</span>
              Add All to Calendar
            </button>
          </div>
        </div>
      </div>
      <div
          className="snap-section footer-snap"
          style={{ background: "#f0ebe3", minHeight: "unset" }}
        >
          <Footer />
        </div>
    </div>
    
  );
}