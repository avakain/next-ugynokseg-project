import Image from "next/image"

export default function CampaignItem({ channel }) {
  return (
    <div className="grid md:grid-cols-2 gap-1 p-8  shadow-lg z[-10] rounded-xl my-16">
      <div className="items-center m-auto p-13 rounded-xl bg-gray-900 shadow-lg ">
        <Image className="rounded-xl" src='/images/campaign/pizzaking.png'
          width={400} height={300} alt={channel.name} />
      </div>
      <div className="grid items-center rounded-xl mx-8 bg-gray-90">
        <div className="m-auto">
          <h1 className="text-5xl">{channel.name}</h1>
          <h1>{channel.duration} hampány időtartama</h1>
          <h1>{channel.subscribers} a castornára feliratkozók száma</h1>
          <h1>{channel.views} összes megtekintés</h1>
        </div>
      </div>
    </div>
  )
}

