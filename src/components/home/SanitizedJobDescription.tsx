// import { sanitize } from "dompurify";

const SanitizedJobDescription = ({ description }: { description: string }) => {
  // const sanitizedDescription = sanitize(description)
  return (
    <section className="px-4 mt-4">
      <h4 className="font-semibold">Full job description:</h4>
      <div className="mt-2 px-4">
        {description && (
          <p
            dangerouslySetInnerHTML={{ __html: description }}
            className="text-muted-foreground text-sm"
          ></p>
        )}
      </div>
    </section>
  );
};

export default SanitizedJobDescription;
