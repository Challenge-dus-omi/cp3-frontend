export const GET = async (
	_: Request,
	{ params }: { params: Record<"id" | "name", string> },
) => {
	const res = await fetch(
		`https://apod.nasa.gov/apod/image/${params.id}/${params.name}`,
	);
	if (res.status === 404) {
		return Response.redirect("/not-found");
	}
	return new Response(res.body);
};
