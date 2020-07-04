import S from "@sanity/desk-tool/structure-builder";
import MdSettings from "react-icons/lib/md/settings";
import FaHome from "react-icons/lib/fa/home";
import FaLeaf from "react-icons/lib/fa/leaf";
import FaPaperPlane from "react-icons/lib/fa/paper-plane";

const hiddenDocTypes = (listItem) =>
  !["siteProject", "category", "siteHome", "sitePage", "siteSettings"].includes(
    listItem.getId()
  );

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home")
        .schemaType("siteHome")
        .child(S.documentTypeList("siteHome").title("Home"))
        .icon(FaHome),
      S.listItem()
        .title("Pages")
        .schemaType("sitePage")
        .child(S.documentTypeList("sitePage").title("Page"))
        .icon(FaLeaf),
      S.listItem()
        .title("Projects")
        .schemaType("siteProject")
        .icon(FaPaperPlane)
        .child(S.documentTypeList("siteProject").title("Project")),
      S.listItem()
        .title("Categories")
        .schemaType("category")
        .child(S.documentTypeList("category").title("Category")),
      S.listItem()
        .title("Settings")
        .child(S.editor().schemaType("siteSettings").documentId("siteSettings"))
        .icon(MdSettings),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
