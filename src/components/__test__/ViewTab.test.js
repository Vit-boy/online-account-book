import React from 'react'
import { shallow } from 'enzyme'
import ViewTab from '../ViewTab'
import { LIST_VIEW, CHART_VIEW } from '../../utility'

const props = {
    activeTab: LIST_VIEW,
    onTabChange: jest.fn()
}

let wrapper
describe('test ViewTab component', () => {
    beforeEach(() => {
        wrapper = shallow(<ViewTab {...props} />)
    })

    it('should render the component to match the snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should render two Tab component, first one should be active', () => {
        expect(wrapper.find('.nav-item').length).toEqual(2)
        expect(wrapper.find('.nav-link').length).toEqual(2)
        expect(wrapper.find('.nav-link').first().hasClass('active')).toEqual(true)
        expect(wrapper.find('.nav-link').first().text()).toEqual('<Ionicon />列表模式')
        expect(wrapper.find('.nav-link').last().text()).toEqual('<Ionicon />图标模式')
    })

    it('click the 2nd Tab should change the active stauts and trigger the right function', () => {
        wrapper.find('.nav-link').last().simulate('click', { preventDefault: () => {}})
        expect(wrapper.find('.nav-link').first().hasClass('active')).toEqual(false)
        expect(wrapper.find('.nav-link').last().hasClass('active')).toEqual(false)
    })
})