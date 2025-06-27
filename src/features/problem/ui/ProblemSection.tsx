import { IProblemIdResponse } from '../types/problem.type';

export default function ProblemSection({ problem }: { problem: IProblemIdResponse['result'] }) {
  const { title, difficulty, categories, description } = problem;

  return (
    <section className="flex-1">
      <div>
        <h1>
          <span>{title}</span>난이도{difficulty}
          {'>'}
          {categories[0]}
        </h1>
      </div>
      <p>{description}</p>
      <h2>제한 사항</h2>
      <p>제한사항 어쩌구</p>
      <h2>예시</h2>
      <p>예시 어쩌구</p>
    </section>
  );
}
