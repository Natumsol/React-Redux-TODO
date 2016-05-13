jest.autoMockOff();
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Detail = require('../src/pages/Detail').default;

describe('Detail', () => {
    // tests go here
    it('starts with zero commits', () => {
        const rendered = TestUtils.renderIntoDocument(
            <Detail params={{ repo: '' }} />
        );
        expect(rendered.state.commits.length).toEqual(0);
    });

    it('show commits by default', () => {
        const rendered = TestUtils.renderIntoDocument(
            <Detail params={{ repos: '' }} />
        );
        expect(rendered.state.mode).toEqual("commits");
    });

    it('show forks when the button is tapped', () => {
        const rendered = TestUtils.renderIntoDocument(
            <Detail params = {{ repos: "" }} />
        );
        const forkButton = rendered.refs.forks;
        TestUtils.Simulate.click(forkButton);
        expect(rendered.state.mode).toEqual('forks');
    });

    it('fetches commits from GitHub', () => {
        const rendered = TestUtils.renderIntoDocument(
            <Detail params={{ repo: 'wei-bbs' }} />
        );

        beforeEach(() => {
            console.log('In waitFor: ' + rendered.state.commits.length);
            if (rendered.state.commits.length) {
                done();
            }
        }, "commits to be set", 2000);

        afterEach(() => {
            expect(rendered.state.commits.length).toEqual(30);
        });
    });
    // it('start with some commits', () => {
    //     const rendered = TestUtils.renderIntoDocument(
    //         <Detail params={{repo: "wei-bbs"}} />
    //     );
    //     expect(rendered.state.commits.length)
    // });
});