import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { IApprovedImage } from "../../../types/image";
import { LeftArrow, RightArrow } from "./Arrows";
import { Card } from "./Card";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

export interface IApprovedImages {
  approvedImages: IApprovedImage[];
}

const ApprovedImages = ({ approvedImages }: IApprovedImages) => {
  const onWheel = (apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void => {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
      ev.stopPropagation();
      return;
    }

    if (ev.deltaY < 0) {
      apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
      apiObj.scrollPrev();
    }
  };
  return (
    <>
      <div>
        <div>
          {approvedImages.length === 0 && <Card title={""} itemId={""} />}
          <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} onWheel={onWheel}>
            {approvedImages.length > 0 ? (
              approvedImages.map((item, index) => (
                <Card imageUrl={item.urls.regular} title={item.id} itemId={item.id} key={item.id + index} />
              ))
            ) : (
              <div></div>
            )}
          </ScrollMenu>
        </div>
      </div>
    </>
  );
};
export default ApprovedImages;
