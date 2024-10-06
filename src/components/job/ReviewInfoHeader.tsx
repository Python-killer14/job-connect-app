// Type props
interface ReviewInfoHeaderProps {
  header: string;
}

export const ReviewInfoHeader = ({ header }: { header: string }) => {
  return (
    <h3 className="font-medium text-lg border-b-2 border-dashed pb-2">
      {header}
    </h3>
  );
};
