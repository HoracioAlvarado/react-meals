import { useGlobalContext } from '../context'

const Meals = () => {
  const { meals } = useGlobalContext()

  return (
    <section>
      {meals.map((single) => {
        console.log(single)
        return <h4>single meal</h4>
      })}
    </section>
  );
}
export default Meals;
