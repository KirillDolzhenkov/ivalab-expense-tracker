import React from 'react';
import {Table} from 'antd';
import styles from "../../expenses/ui/ExpensesPage.module.less";


export const CategoriesPage: React.FC = () => {

    const columnsData = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Description', dataIndex: 'description', key: 'description' },
        /*{
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Button type="link" onClick={() => handleDelete(record.id)}>
                    Delete
                </Button>
            ),
        },*/
    ]

    return (
        <>
            <div className={styles.expensesWrapper}>
                <Table dataSource={[]} columns={columnsData} rowKey="date"/>
            </div>
        </>
    );
};