
import InputComponent from "../input/Inputcomponent";



export default function AdminInfluencerItem({ influencers, form }) {

  return (
    <>
      {influencers?.map((influencer, index, form, setForm) => (
        <div
          key={influencer.id}
          className={`flex ${edit !== index ? 'xs:flex-row border-gray-200' : 'xs:flex-col border-red-400 bg-gray-100'
            } justify-between border-2 font-light border-gray-200 p-3 rounded-lg my-2`}
        >
          <div className="sm:grid">

            <div className="grid">
              <InputComponent
                required
                id={influencer.name}
                label="Név"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <InputComponent
                id={influencer.socialmedia.tiktok ? null : influencer.socialmedia.instagram}
                label="Tiktok követők"
                value={form.socialmedia.tiktok}
                onChange={(e) =>
                  setForm({ ...form, socialmedia: { ...form.socialmedia, tiktok: e.target.value } })
                }
                type="number"
              />
              <InputComponent
                id={influencer.socialmedia.instagram ? null : influencer.socialmedia.tiktok}
                label="Instagram követők"
                value={form.socialmedia.instagram}
                onChange={(e) =>
                  setForm({ ...form, socialmedia: { ...form.socialmedia, instagram: e.target.value } })
                }
                type="number"
              />
              <div>
                <div className="grid">
                  <label htmlFor={`influencer${influencer.name}`} className="text-lg">
                    {influencer.imageLink === '' ? 'Kép feltöltés' : 'Feltöltött kép:'}
                  </label>
                  <input
                    required
                    type="file"
                    id={`influencer${influencer.name}`}
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => setImageUpload(e.target.files[0])}
                  />
                  <label htmlFor={`influencer${influencer.name}`} className="cursor-pointer">
                    {influencer.imageLink === '' ? <AiOutlineUpload size={30} /> : ''}
                    <div className="flex">
                      <div className="mr-5">
                        <p className="text-lg italic">
                          {influencer.imageLink ? extractFileNameFromURL(influencer.imageLink) : ''}
                        </p>
                      </div>
                      <div className="mt-1">
                        <RxCross1 className="text-red-500" size={20} />
                      </div>
                      {influencer.imageLink}
                    </div>
                  </label>
                </div>
              </div>
            </div>
            ) : (
            influencer.name
          </div>
        </div>
      ))}
    </>
  );
}
