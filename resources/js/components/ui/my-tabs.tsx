import { cn } from '@/lib/utils';
import { ComponentProps, createContext, Dispatch, SetStateAction, use, useState } from 'react';

// Implicit state management
const TabsContext = createContext<{
    activeTab: string;
    setActiveTab: Dispatch<SetStateAction<string>>;
} | null>(null);

function useTabs() {
    const context = use(TabsContext);
    if (!context) {
        throw new Error('useTabs must be used within a MyTabs');
    }
    return context;
}

// Tabs
export function MyTabs({ children, defaultValue }: { children: React.ReactNode; defaultValue: string }) {
    const [activeTab, setActiveTab] = useState(defaultValue);

    return (
        <div>
            <TabsContext value={{ activeTab, setActiveTab }}>{children}</TabsContext>
        </div>
    );
}

// TabTrigger
function MyTabTrigger({ value, ...props }: { value: string } & ComponentProps<'button'>) {
    const { activeTab, setActiveTab } = useTabs();

    const isActive = value === activeTab;

    return (
        <button
            onClick={() => setActiveTab(value)}
            className={cn('rounded px-4 py-2 font-semibold', isActive ? 'bg-yellow-200 text-yellow-800' : 'bg-slate-200 text-slate-800')}
            aria-selected={isActive}
            data-state={isActive ? 'active' : 'inactive'}
            tabIndex={isActive ? 0 : -1}
            {...props}
        />
    );
}

// TabPanel
function MyTabPanel({ value, ...props }: { value: string } & ComponentProps<'div'>) {
    const { activeTab } = useTabs();
    if (activeTab !== value) {
        return null;
    }
    return <div className="mt-2 max-w-xl border border-slate-300 p-6" {...props} />;
}

MyTabs.Trigger = MyTabTrigger;
MyTabs.Panel = MyTabPanel;
