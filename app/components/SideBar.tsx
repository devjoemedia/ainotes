import CreateFolder from "./CreateFolder";
import Logo from "./Logo";
import FolderList from "./FolderList";

const SideBar = () => {
  return (
    <div>
      <CreateFolder />
      <Logo size='lg' />
      <FolderList />
    </div>
  );
};

export default SideBar;
