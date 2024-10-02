import Image from "next/image";

export default function Home() {
	return (
		<div className="px-8 flex flex-col gap-2">
			<h1 className="text-4xl font-bold">
				Teoria 2 - Perturbações Celestes e Catástrofes na Terra
			</h1>
			<p>
				A teoria central de Velikovsky era que grandes catástrofes na história
				da Terra, como inundações, terremotos e mudanças climáticas extremas,
				foram causadas por perturbações gravitacionais de corpos celestes como
				Vênus e Marte. Ele acreditava que esses eventos ocorreram em tempos
				relativamente recentes e afetaram civilizações antigas, sendo
				registrados em mitos e textos religiosos.
			</p>
			<Image
				src="/img/1506/eso1520aMedusaS.jpg"
				alt="nasa"
				width={300}
				height={300}
				className="rounded-xl"
			/>
		</div>
	);
}
