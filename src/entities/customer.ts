import { Optional } from "../types/optional"
import { Entity } from "./entity"
import { UniqueEntityID } from "./unique-entity-id"

export interface CustomerProps {
  name: string
  cpf: string
  passwordHash: string
  createdAt: Date
}

export class Customer extends Entity<CustomerProps> {

  get name() {
    return this.props.name
  }

  get cpf() {
    return this.props.cpf
  }

  get passwordHash() {
    return this.props.passwordHash
  }

  get createdAt() {
    return this.props.createdAt
  }

  static create(
    props: Optional<CustomerProps, "createdAt">,
    id?: UniqueEntityID
  ) {
    const customer = new Customer({
      ...props,
      createdAt: props.createdAt ?? new Date()
    }, id)

    return customer
  }
}