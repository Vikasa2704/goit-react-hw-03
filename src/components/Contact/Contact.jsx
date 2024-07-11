import { IoIosContact } from 'react-icons/io';
import { MdPhoneInTalk } from 'react-icons/md';
import css from './Contact.module.css';

const Contact = ({ id, number, name, onDelete }) => {
	return (
		<li className={css.contactItem}>
			<div>
				<div className={css.contactContext}>
					<IoIosContact />
					<span>{name}</span>
				</div>
				<div className={css.contactContext}>
					<MdPhoneInTalk />
					<a href={`tel: ` + number}>{number}</a>
				</div>
			</div>
			<button
				onClick={() => onDelete(id)}
				type='button'
				aria-label='delete button'
			>
				Delete
			</button>
		</li>
	);
};

export default Contact;