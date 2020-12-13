import React from "react";

import CollectionItem from "../collection-item/collection-item.component";
import { PreviewContainer, TitleContainer } from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => (
  <CollectionPreview>
    <TitleContainer>{title.toUpperCase()}</TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreview>
);

export default CollectionPreview;
