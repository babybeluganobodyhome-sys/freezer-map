import * as D from '@radix-ui/react-dialog';
import * as T from '@radix-ui/react-toggle-group';
import {Slot} from '@radix-ui/react-slot';
import {cva} from 'class-variance-authority';
import {clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';
const cn=(...x)=>twMerge(clsx(x));
const variants=cva('inline-flex min-h-10 items-center justify-center rounded-md px-3 py-2 text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',{variants:{variant:{default:'bg-primary text-white hover:opacity-90',outline:'border bg-card hover:bg-muted',danger:'border border-red-300 text-red-800 hover:bg-red-50'}},defaultVariants:{variant:'default'}});
export function Button({variant,className,asChild=false,type='button',...p}){const C=asChild?Slot:'button';return <C type={asChild?undefined:type} className={cn(variants({variant}),className)} {...p}/>;}
export function Card({className,...p}){return <section className={cn('rounded-xl border bg-card p-5 shadow-sm',className)} {...p}/>;}
export function Input(p){return <input className='min-h-10 w-full rounded-md border bg-card px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring disabled:opacity-50' {...p}/>;}
export function Textarea(p){return <textarea className='min-h-24 w-full rounded-md border bg-card p-3 text-sm outline-none focus:ring-2 focus:ring-ring disabled:opacity-50' {...p}/>;}
export function Field({label,children}){if(label==='Zone description')return null;return <label className='block space-y-2 text-sm font-medium'><span>{label}</span>{children}</label>;}
export function Select({options,...p}){return <select className='min-h-10 w-full rounded-md border bg-card px-3 py-2 text-sm' {...p}>{options.map(o=><option key={o.value} value={o.value}>{o.label}</option>)}</select>;}
export function Alert({children}){return <div role='alert' className='rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950'>{children}</div>;}
export function Modal({open,onOpenChange,title,children}){return <D.Root open={open} onOpenChange={onOpenChange}><D.Portal><D.Overlay className='fixed inset-0 z-50 bg-black/40'/><D.Content className='fixed left-1/2 top-1/2 z-50 max-h-[90dvh] w-[calc(100%_-_2rem)] max-w-3xl -translate-x-1/2 -translate-y-1/2 space-y-5 overflow-y-auto rounded-xl border bg-background p-6 shadow-xl'><D.Title className='pr-14 text-xl font-semibold'>{title}</D.Title><D.Description className='sr-only'>Household inventory controls</D.Description>{children}<D.Close className='absolute right-4 top-4 rounded-md p-1 text-sm hover:bg-muted'>Close</D.Close></D.Content></D.Portal></D.Root>;}
export function Capacity({value,onChange,items,disabled}){return <T.Root type='single' aria-label='Contents level' value={value||''} onValueChange={v=>{if(v)onChange(v);}} disabled={disabled} className='flex flex-wrap gap-2'>{items.map(v=><T.Item value={v} key={v} className='min-h-10 flex-1 whitespace-nowrap rounded-md border px-3 py-2 text-sm disabled:opacity-50 data-[state=on]:border-primary data-[state=on]:bg-primary data-[state=on]:text-white'>{v}</T.Item>)}</T.Root>;}
