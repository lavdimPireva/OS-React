import { getGallery } from "@api/gallery.client";
import { HandleRequestState } from "@components/shared/HandleRequestState/HandleRequestState";
import { useQuery } from "react-query";
import { GalleryItem } from "./GalleryItem";

export const Gallery = () => {
  const { isLoading, isError, data } = useQuery("gallery", getGallery);

  return (
    <div className="flex-1 flex flex-col px-6 overflow-y-auto max-h-full">
      <h1 className="text-left w-full font-bold text-4xl">Gallery</h1>
      <div className="mt-6 grid grid-cols-4 gap-5 flex-1 pb-4">
        <HandleRequestState state={isLoading} placeholder={<p>Loading...</p>}>
          <HandleRequestState
            state={isError}
            placeholder={
              <p>Gallery couldn't be loaded, please try again later!</p>
            }
          >
            {data?.map((news) => {
              return <GalleryItem key={`${news.id}`} {...news} />;
            })}
          </HandleRequestState>
        </HandleRequestState>
      </div>
    </div>
  );
};
