type Props = {
  keyword: string;
  setKeyword: (value: string) => void;
};

export default function SearchBox({
  keyword,
  setKeyword,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">
        物件検索
      </h2>

      <input
        className="w-full border rounded-lg p-3 mb-4"
        placeholder="市町村・キーワード"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <button className="w-full bg-emerald-700 text-white rounded-lg p-3">
        検索
      </button>
    </div>
  );
}