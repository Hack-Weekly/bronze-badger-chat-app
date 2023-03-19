import React from 'react';
import { Form, Card } from '../../components';
import { LeftPane, RightPane } from '../../components/Card/Panes';
import { FormSwiper } from '../../components/Form/FormSwiper';
import { restFormProps, inputItems } from './registerFormProps';

export const Register = () => {
  return (
    <div className='flex min-h-screen justify-center items-center'>
      <Card>
        <LeftPane>
          <Form
            headerText={
              <>
                Create a new account <span className='accent'>.</span>
              </>
            }
            inputItems={inputItems}
            {...restFormProps}
          />
        </LeftPane>
        <RightPane>
          <FormSwiper />
        </RightPane>
      </Card>
    </div>
  );
};
