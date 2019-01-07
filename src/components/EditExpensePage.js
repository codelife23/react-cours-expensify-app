import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import AskModal from './AskModal';

export class EditExpensePage extends React.Component {
    state = {
        expenseModal: undefined
    };
    handleClearExpenseModal = () => {
        this.setState(() => ({
            expenseModal: false
        }));
    };
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    askRemove = () => {
        this.setState(() => ({
                expenseModal: true
        }));
    };
    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.askRemove}>Remove Expense</button>
                    <AskModal
                        expenseModal={this.state.expenseModal}
                        handleClearExpenseModal={this.handleClearExpenseModal}
                        onRemove={this.onRemove}
                        description={this.props.expense.description}
                    />
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
};

const mapDispatchToPropts = (dispatch, props) => {
    return {
        startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
        startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
    }
};

export default connect(mapStateToProps, mapDispatchToPropts)(EditExpensePage);