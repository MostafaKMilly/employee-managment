interface DialogProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ title, isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 bg-black flex justify-center items-center">
      <div className="bg-white p-4 rounded">
        <h1 className="text-xl">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default Dialog;
