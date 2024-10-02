import type { NextPage } from "next";
import Image from "next/image";

const Page: NextPage = async () => {
	const res: NASARes[] = await fetch(
		"https://api.nasa.gov/EPIC/api/natural?api_key=VhDeHuxVWDed5rAsTYB43aTLBsojQYziSp0QzuYB",
	).then((res) => res.json());

	return res.map((i) => {
		const [year, month, date] = i.date.split(" ")[0].split("-");
		const urlImage = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${date}/jpg/${i.image}.jpg`;
		console.log(urlImage);
		return <Image alt={i.image} src={urlImage} width={200} height={200} />;
	});
};
export default Page;
