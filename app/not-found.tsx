import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page" id="main-content">
      <div className="container">
        <p className="eyebrow">404 / PAGE NOT FOUND</p>
        <h1>That page isn’t here.</h1>
        <p>The address may have changed, or the project isn’t available yet.</p>
        <Link className="button button-dark" href="/projects">Browse projects</Link>
      </div>
    </main>
  );
}