interface FormValues {
  name: string;
  email: string;
  password: string;
}

const inputs: Record<
  keyof FormValues,
  {
    initialValue: string;
    label: string;
  }
> = {
  name: {
    initialValue: "",
    label: "Name",
  },
  email: {
    initialValue: "",
    label: "Email",
  },
  password: {
    initialValue: "",
    label: "Password",
  },
};