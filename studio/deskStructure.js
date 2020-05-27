import S from "@sanity/desk-tool/structure-builder";
import MdSettings from "react-icons/lib/md/settings";
import FaLeaf from "react-icons/lib/fa/leaf";

const hiddenDocTypes = (listItem) =>
  !["sitePage", "siteSettings"].includes(listItem.getId());

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Settings")
        .child(S.editor().schemaType("siteSettings").documentId("siteSettings"))
        .icon(MdSettings),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
      S.listItem()
        .title("Pages")
        .schemaType("sitePage")
        .child(S.documentTypeList("sitePage").title("Page"))
        .icon(FaLeaf),
    ]);
