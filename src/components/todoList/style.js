import styled from 'styled-components';

export const TodoListWrapper = styled.div`
    width: 100%
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #333;
    padding: 30px;
`

export const Section = styled.div`
    width: 600px;
    box-shadow: 6px 10px 27px -10px rgba(0, 0, 0, 0.4);
    transition: all .2s;
    background-color: #877ca9;
    &:hover {
        box-shadow: 6px 10px 50px -10px rgba(0, 0, 0, 0.4);
        transform: translateY(-13px);
    }
`
export const Todo = styled.div`
    padding: 55px 0; 
    color: #fff;
    text-align: center;
    .heading-primary--main {
        display: block;
        padding: 30px 20px 20px 20px;
        font-size: 6rem;
        text-transform: uppercase;
    }  
    .heading-primary--sub {
        display: inline-block;
        padding: 0 20px;
        line-height: 20px;
        font-size: 18px;
        font-weight: normal;
    } 
`

export const TodoLists = styled.div`
    width: 80%;
    margin: 40px auto;
    padding: 30px;
    padding-bottom: 56px;
    background-color: #fff; 
    box-shadow: 2px 1px 3px 0px rgba(0, 0, 0, 0.4);
    h5 {
        margin-top: 28px;
        padding: 20px 0;
        border-top: 1px dashed #bbb9c1;
        color: #66559a;
        font-size: 30px;
    }
`

export const TodoItem = styled.div`
    display: flex;
    padding: 5px 7px;
    width: 100%;
    // border: 1px solid;
    transition: all .4s;
    &:hover {
        background: rgba(202, 201, 206, 0.59);
    }
    > * {
        // border: 1px solid;
        padding: 6px;
    }
    &.todo__item--complete {
        opacity: 0.4;
        background-color: #fff;
        &:hover {
            opacity: 1;
            .form__checkbox-group {
                opacity: 1;
            }
            input {
                background: #fff;
            }

        }
        input {
            background: transparent;
        }
        .form__checkbox-group {
            // opacity: 0;
            .form__checkbox-button {
                &::before {
                    opacity: 1
                }
                &::after {
                    opacity: 1
                }
            }
        }
        
    }
`

export const FormCheckboxGroup = styled.div`
    position: relative;
    width: 50px;
    height: 50px;
    .form__checkbox-input {
        // display: inline-block;
        // width: 35px;
        // height: 35px;
        // background-color: rgba(51, 51, 51, 0.5);
        // border-radius: 100%;
        // opacity: 0.3;
        display: none;
    }
    .form__checkbox-label {
        position: relative;
        font-size: 1.6rem;
        cursor: pointer;
    }
    .form__checkbox-button {
        position: absolute;
        left: 0;
        display: inline-block;
        height: 3rem;
        width: 3rem;
        background-color: rgb(238, 238, 238);
        // border: 5px solid #55c57a;
        border-radius: 50%;
        transform: rotate(45deg);
        &::after {
            content: '';
            display: inline-block;
            position: absolute;
            width:7px;
            height:22px;
            background-color:#ccc;
            left:18px;
            top:6px;
            transition: all .3s;
            opacity: 0;
        }
        &::before {
            content: '';
            display: inline-block;
            position: absolute;
            width: 8px;
            height: 6px;
            background-color: #ccc;
            left: 11px;
            top: 22px;
            transition: all .3s;
            opacity: 0;
        }
    }
    .form__checkbox-input:checked ~ .form__checkbox-label .form__checkbox-button::before,
    .form__checkbox-input:checked ~ .form__checkbox-label .form__checkbox-button::after {
        opacity: 1;
    }
`

export const TodoContent = styled.div`
    margin-left: 20px;
    width: 100%;
    input {
        width: 100%;
        padding-left: 10px;
        border: none;
        border: 3px solid rgba(135, 124, 169, 0.5);
        border-radius: 4px;
        // background-color: #e8e8e8;
        height: 40px;
        &:focus {
            // border: 1px solid #bbb9c1;
            background-color: #eee;
        }
    }
    span {
        display: inline-block;
        width: 100%;
        // border: 3px solid rgba(135, 124, 169, 0.5);
        // border-radius: 4px;
        height: 40px;
        line-height: 40px;
        padding-left: 10px;
        color: #222;
        font-size: 18px;
    }
`

export const TodoActions = styled.div`
    min-width: 164px;
    // width: 37%;
    font-size: 16px;
    a {
        display: inline-block;
        padding: 6px;
        color: #999;
        &:hover {
            color: #8875c1;
        }
    }
    i {
        display: inline-block;
        width: 30px;
        height: 30px;
        text-align: center;
        vertical-align: middle;
        font-size: 20px;
        font-weight: bold;
    }
`
