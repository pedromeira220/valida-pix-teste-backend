import { Entity } from "./entity"
import { UniqueEntityID } from "./unique-entity-id"

interface PixTransactionProps {
  date: Date
  valueInCents: number
  customerId: UniqueEntityID
  senderKey: string
}

export class PixTransaction extends Entity<PixTransactionProps> {
  get date() {
    return this.props.date
  }

  get valueInCents() {
    return this.props.valueInCents
  }

  get customerId() {
    return this.props.customerId
  }

  get senderKey() {
    return this.props.senderKey
  }

  static create(
    props: PixTransactionProps,
    id?: UniqueEntityID
  ) {
    const pixTransaction = new PixTransaction(props, id)

    return pixTransaction
  }
}