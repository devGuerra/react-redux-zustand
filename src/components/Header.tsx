import { MessageCircle } from "lucide-react";
import { useCurrentLesson } from "../store/slices/player";
import { useAppSelector } from "../store";

export function Header() {
  const { currentLesson, currentModule } = useCurrentLesson();
  const isCourseLoading = useAppSelector((state) => state.player.isLoading);

  if (isCourseLoading) {
    return <h1 className="text-2xl font-bold">Carregando...</h1>;
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
        <span className="text-sm text-zinc-400">
          Modulo "{currentModule?.title}"
        </span>
      </div>
      <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600">
        <MessageCircle className="w- h-4" />
        Deixar Feedback
      </button>
    </div>
  );
}
