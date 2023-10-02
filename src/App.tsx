const iconPack = [
	{
		img: "https://e1.pngegg.com/pngimages/330/499/png-clipart-icons-ios-9-messages-thumbnail.png",
		name: "Messages",
		type: "dock",
	},
	{
		img: "https://e1.pngegg.com/pngimages/806/610/png-clipart-icons-ios-9-phone-thumbnail.png",
		name: "Phone",
		type: "dock",
	},
	{
		img: "https://e1.pngegg.com/pngimages/59/374/png-clipart-ios-7-icons-updated-safari-safari-logo-thumbnail.png",
		name: "Safari",
		type: "dock",
	},
	{
		img: "https://e1.pngegg.com/pngimages/466/330/png-clipart-icons-ios-9-camera-thumbnail.png",
		name: "Camera",
		type: "dock",
	},
	{
		img: "https://e1.pngegg.com/pngimages/803/923/png-clipart-icons-ios-9-mail-thumbnail.png",
		name: "Mail",
	},
	{
		img: "https://e1.pngegg.com/pngimages/618/42/png-clipart-icons-ios-9-settings-thumbnail.png",
		name: "Settings",
	},
];

function App() {
	return (
		<>
			<div className="text-sm p-4 pb-0">
				<div>2:58</div>
			</div>
			<div className="snap-x snap-mandatory w-full flex overflow-auto flex-['0_0_100%'']">
				{[1, 1].map(() => (
					<div
						className="grid grid-cols-4 gap-4 p-4 grid-rows-6 justify-center snap-center w-full"
						style={{
							flex: "0 0 100%",
						}}
					>
						<div className="col-span-2 row-span-2 bg-gray-50 rounded-2xl p-4 flex flex-col">
							<div className="text-sm text-red-600 font-medium">Monday</div>
							<div className="text-2xl">2</div>
							<div className="flex-1 flex items-center text-sm text-gray-500">
								No events today
							</div>
						</div>
						<div className="col-span-2 row-span-2 bg-blue-50 rounded-2xl p-4 flex flex-col">
							<div className="text-sm text-blue-600 font-medium">Sousse</div>
							<div className="text-2xl">28°</div>
							<div className="flex-1 flex items-end text-sm text-gray-500">
								<div>
									<div className="text-xs text-red-600 font-medium">Sunny</div>
									<div className="text-xs">H:28° L:20°</div>
								</div>
							</div>
						</div>
						{iconPack.map((url) => (
							<div className="col-span-1 flex justify-center items-center">
								<IosIcon url={url.img} name={url.name} showText />
							</div>
						))}
					</div>
				))}
			</div>

			<div className="mx-auto flex items-center w-fit gap-4 px-2.5 py-1 bg-gray-200/50 justify-center m-4 rounded-2xl text-xs">
				Search
			</div>
			<div className="flex gap-4 p-2.5 bg-gray-200/50 justify-center m-4 rounded-2xl">
				{iconPack
					.filter((icon) => icon.type === "dock")
					.map((url) => (
						<IosIcon url={url.img} name={url.name} />
					))}
			</div>
		</>
	);
}

export default App;

function IosIcon({
	url,
	name,
	showText,
}: {
	url: string;
	name: string;
	showText?: boolean;
}) {
	return (
		<button className="active:grayscale-[60%] transition-all active:scale-105">
			<img
				src={url}
				className="bg-green-300 h-12 w-12 rounded-lg hover:opacity-80 focus:grayscale-[60%] transition-all object-contain "
			></img>
			{showText && name && <div className="text-xs">{name}</div>}
		</button>
	);
}
