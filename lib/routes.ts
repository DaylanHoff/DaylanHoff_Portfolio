// S3 serves the static export directly; it does not rewrite extensionless routes.
export const RESUME_PAGE_PATH =
  process.env.NODE_ENV === "production" ? "/resume.html" : "/resume";
