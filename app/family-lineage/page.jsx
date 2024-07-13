import FamilyTree from "./FamilyLineageComponent";
async function getData() {
  const res = await fetch("http://localhost:3000/family-lineage/api/get", {
    cache: "no-store",
  });
  return res.json();
}
const FamilyLineagePage = async () => {
  const item = await getData();
  return <FamilyTree data={item} />;
};

export default FamilyLineagePage;
