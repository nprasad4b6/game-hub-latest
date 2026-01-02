import useGeners, { Gener } from "../hooks/useGeners";

export const GenereLst = () => {
  const { data, error, isLoading } = useGeners();

  return (
    <ul>
      {data.map((genere) => (
        <li>{genere.name}</li>
      ))}
    </ul>
  );
};
