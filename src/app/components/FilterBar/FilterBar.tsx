interface Props {
  category: string;
  search: string;
  onCategoryChange: (value: string) => void;
  onSearchChange: (value: string) => void;
  onFilter: () => void;
}

export default function FilterBar({
  category,
  search,
  onCategoryChange,
  onSearchChange,
  onFilter,
}: Props) {
  return (
    <div className="bg-white p-3 mb-4 rounded shadow-sm">
      <div className="row g-3">
        <div className="col-md-4">
          <select
            className="form-select"
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            <option value="">Todos los dispositivos</option>
            <option value="laptop">Laptops</option>
            <option value="drone">Drones</option>
            <option value="tablet">Tablets</option>
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar por nombre o marca"
          />
        </div>
        <div className="col-md-4 text-end">
          <button className="btn btn-primary" onClick={onFilter}>
            Filtrar
          </button>
        </div>
      </div>
    </div>
  );
}
