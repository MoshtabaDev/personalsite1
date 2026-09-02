import styles from "./Project.module.css";

function Project() {
  const ProjectDetail = [
    {
      id: 1,
      title: "Todo-List",
      detail: `We have a todo App for save our summery works to do in a day.`,
      href: "https://todo-app-2-hazel.vercel.app/",
    },
    {
      id: 2,
      title: "SignIn & logIn Form",
      detail: `A React-based authentication UI with Login and Sign Up forms, responsive design, client-side validation, and LocalStorage integration for storing user data.`,
      href: "https://login-form-pi-eight-12.vercel.app/",
    },
  ];
  return (
    <div className={styles.listOfProjects}>
      {ProjectDetail.map((item) => (
        <div className={styles.project} key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.detail}</p>
          <a href={item.href}>Link</a>
        </div>
      ))}
    </div>
  );
}

export default Project;
