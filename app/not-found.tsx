import css from '../components/Home/Home.module.css'

export default function NotFound() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  )
}
