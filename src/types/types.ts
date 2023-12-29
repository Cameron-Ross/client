import { CSSProperties } from "react";

export type Styles = {
  /** The CSS props associated with a key. */
  [key: string]: CSSProperties;
};

export type ButtonProps = {
    /** The name of the button. */
    name: string,
    /** Is the button disabled. */
    disabled?: boolean,
    /** What happens if the text is clicked? */
    onClick?: (e: any) => void,
}

export type CardProps = {
  name?: string,
  status?: string,
  date?: Date
  selected?: boolean
  onClick?: () => void,
}

export type Organization = {
  name: string,
  _id: string
}

export type Classroom = {
  name: string,
  _id: string
}

export type Course = {
  name: string,
  status: string,
  date: string,
  _id: string
}
