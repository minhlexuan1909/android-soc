export const handleChangeFormInput = (
  key: string,
  value: any,
  setValue: React.Dispatch<React.SetStateAction<any>>,
) => {
  setValue((prevState: any) => ({
    ...prevState,
    [key]: value,
  }));
};

export function roundHalf(num: number) {
  return Math.round(num * 2) / 2;
}
