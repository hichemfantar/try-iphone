import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { faBatteryThreeQuarters } from "@fortawesome/free-solid-svg-icons/faBatteryThreeQuarters";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { faSignal } from "@fortawesome/free-solid-svg-icons/faSignal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconPack = [
	{
		img: "https://i.imgur.com/RbKkK1l.png",
		name: "Messages",
		type: "dock",
	},
	{
		img: "https://i.imgur.com/xhSWHL6.png",
		name: "Phone",
		type: "dock",
	},
	{
		img: "https://i.imgur.com/4j9HTzF.png",
		name: "Safari",
		type: "dock",
	},
	{
		img: "https://i.imgur.com/ifeN8w5.png",
		name: "Camera",
		type: "dock",
	},
	{
		img: "https://i.imgur.com/m0czIPG.png",
		name: "Mail",
	},
	{
		img: "https://i.imgur.com/IyRJPtu.png",
		name: "Settings",
	},
];

function App() {
	return (
		<div className="flex flex-col h-[100dvh] ">
			{/* <div className="text-sm p-4 pb-0 text-gray-100 flex justify-between items-center">
				<div className="font-medium">9:42</div>
				<div className="flex gap-2 items-center">
					<FontAwesomeIcon icon={faSignal} />
					<FontAwesomeIcon icon={faWifi} />
					<FontAwesomeIcon icon={faBatteryThreeQuarters} size="lg" />
				</div>
			</div> */}
			<div className="flex-1 snap-x snap-mandatory w-full flex overflow-auto flex-['0_0_100%''] scrollbar-none scroll-smooth">
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

			<div className="">
				<button className="backdrop-blur text-gray-50 mx-auto flex items-center w-fit gap-1 px-2.5 py-1 bg-gray-200/50 justify-center m-4 rounded-2xl text-xs">
					<FontAwesomeIcon icon={faSearch} size="xs" />
					<div>Search</div>
				</button>
				<div className="flex gap-4 p-4 bg-gray-200/50 justify-between md:justify-center m-4 rounded-3xl backdrop-blur">
					{iconPack
						.filter((icon) => icon.type === "dock")
						.map((url) => (
							<IosIcon url={url.img} name={url.name} />
						))}
				</div>
			</div>
		</div>
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
		<button className="active:grayscale-[60%] transition-all active:scale-105 text-gray-100 flex flex-col gap-1 items-center justify-center">
			<img
				src={url}
				className="bg-green-300 h-14 w-14 rounded-xl active:opacity-80 active:grayscale-[60%] transition-all object-cover"
			></img>
			{showText && name && (
				<div className="text-xs font-medium antialiased tracking-wide">
					{name}
				</div>
			)}
		</button>
	);
}
