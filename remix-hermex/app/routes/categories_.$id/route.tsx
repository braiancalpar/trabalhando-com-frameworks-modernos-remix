import type { Route } from "../../+types/root";

export default function CategoriesDetailRoute({
  params,
}: Route.CategoriesDetailRouteProps) {
  return (
    <div>
      <h1>Categorias Detalhe: {params.id}</h1>
    </div>
  );
}
