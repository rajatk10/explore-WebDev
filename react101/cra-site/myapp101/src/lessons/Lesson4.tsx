import type { ReactElement } from 'react';

type Address = {
  id: number;
  street: string;
  city: string;
};

type AddressListProps = {
  addresses: Address[];
};

const addresses: Address[] = [
  { id: 1, street: '123 Main St', city: 'New York' },
  { id: 2, street: '456 Main St', city: 'Chicago' },
  { id: 3, street: '789 Main St', city: 'Seattle' },
  { id: 4, street: '101 Main St', city: 'Austin' },
  { id: 5, street: '112 Main St', city: 'Boston' },
];

function AddressList({ addresses }: AddressListProps): ReactElement {
  return (
    <ul>
      {addresses.map((address: Address): ReactElement => (
        <li key={address.id}>
          {address.street}, {address.city}
        </li>
      ))}
    </ul>
  );
}

export default function Lesson4(): ReactElement {
  return (
    <div>
      <h2>Welcome to Address App - Lesson 4</h2>
      <AddressList addresses={addresses} />
    </div>
  );
}
