import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import TerminalGitHubIcon from '@/shared/ui/icons/terminal-icons/TerminalGitHubIcon';

interface GitPushDialogProps {
  githubUrl: string | null;
  onClick: () => void;
}
export default function GitPushDialog({ githubUrl, onClick }: GitPushDialogProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <TerminalGitHubIcon disabled={!!githubUrl} />
      </DialogTrigger>
      <DialogContent className="w-[425px]">
        <DialogHeader>
          <DialogTitle>git push</DialogTitle>
          <DialogDescription>해당 repo에 push 하시겠습니까?</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">닫기</Button>
          </DialogClose>
          <Button type="button" onClick={onClick}>
            push
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
