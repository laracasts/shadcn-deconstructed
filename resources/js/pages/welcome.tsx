import { Button, buttonVariants } from '@/components/ui/button';
import { MyButton } from '@/components/ui/my-button';

export default function Welcome() {
    return (
        <div className="min-h-screen p-4">
            <div className="flex items-center gap-4">
                <Button size="lg">Large</Button>
                <Button>Button</Button>
                <Button size="sm">Small</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
            </div>

            {/* My Button */}
            <div className="mt-4 flex flex-wrap items-center gap-4">
                <MyButton size="xl">Extra Large</MyButton>
                <MyButton size="large">Large</MyButton>
                <MyButton>Medium</MyButton>
                <MyButton size="small">Small</MyButton>
                <MyButton look="secondary">Secondary</MyButton>
                <MyButton look="outline">Outline</MyButton>
                <MyButton size="large" look="outline">
                    Outline
                </MyButton>

                <a className={buttonVariants({ variant: 'destructive' })} href="#">
                    Button Link
                </a>
                <Button asChild variant="destructive">
                    <a href="#">As Child</a>
                </Button>

                <MyButton asChild look="secondary" size="small" className="font-black">
                    <a href="#">My As Child</a>
                </MyButton>
            </div>
        </div>
    );
}
