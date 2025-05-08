import { Button } from '@/components/ui/button';
import { MyButton } from '@/components/ui/my-button';

export default function Welcome() {
    return (
        <>
            <div className="bg-background py-8">
                <div className="flex gap-2 px-4">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <MyButton data-theme="swiss">My Button</MyButton>
                    <MyButton look="secondary">My Secondary Button</MyButton>
                </div>
            </div>

            <div className="dark bg-background py-8">
                <div className="flex gap-2 px-4">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <MyButton>My Button</MyButton>
                    <MyButton look="secondary">My Secondary Button</MyButton>
                </div>
            </div>

            <div className="bg-background py-8" data-theme="swiss">
                <div className="flex gap-2 px-4">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <MyButton>My Button</MyButton>
                    <MyButton look="secondary">My Secondary Button</MyButton>
                </div>
            </div>
        </>
    );
}
