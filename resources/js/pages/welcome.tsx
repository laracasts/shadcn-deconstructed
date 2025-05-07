import { MyTabs } from '@/components/ui/my-tabs';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function TabsDemo() {
    return (
        <div className="flex flex-col gap-20 p-8">
            <MyTabs defaultValue="billing">
                <div className="flex gap-2">
                    <MyTabs.Trigger value="settings">My Settings</MyTabs.Trigger>
                    <MyTabs.Trigger value="billing">Billing</MyTabs.Trigger>
                </div>
                <MyTabs.Panel value="settings">
                    <h2 className="text-lg font-semibold">This is the settings panel</h2>
                    <p className="mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nam harum quae! Laboriosam qui rerum similique, provident
                        maiores nesciunt asperiores quis vero magni explicabo. Consequuntur earum tenetur impedit fugiat perspiciatis.
                    </p>
                </MyTabs.Panel>
                <MyTabs.Panel value="billing">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nam harum quae! Laboriosam qui rerum similique, provident
                        maiores nesciunt asperiores quis vero magni explicabo. Consequuntur earum tenetur impedit fugiat perspiciatis.
                    </p>
                </MyTabs.Panel>
            </MyTabs>

            {/* shadcn/ui */}
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <p>This is the Account tab panel.</p>
                </TabsContent>
                <TabsContent value="password">
                    <p>This is the Password tab panel.</p>
                </TabsContent>
            </Tabs>
        </div>
    );
}
