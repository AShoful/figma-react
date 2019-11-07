import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import propOr from '@tinkoff/utils/object/propOr';

import { connect } from 'react-redux';
import setLang from '../../store/actions/setLang';

import styles from './Header.module.css';
import Description from '../Description/Description'

import { LANGS } from '../../constants/constants';
import { MENU_ITEM } from '../../constants/routes' 

const LIST_ITEM_HEIGHT = 25;
const LIST_ITEM_MARGIN = 35;

const mapStateToProps = ({ application }) => {
    return {
        lang: application.lang,
        langRoute: application.langRoute,
        langMap: application.langMap
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setLang: payload => dispatch(setLang(payload))
    };
};

class Header extends Component {
    static propTypes = {
        lang: PropTypes.string,
        outsideClickEnabled: PropTypes.bool,
        turnOnClickOutside: PropTypes.func,
        langRoute: PropTypes.string,
        setLang: PropTypes.func
    };

    static defaultProps = {
        langRoute: ''
    };

    constructor (props) {
        super(props);

        this.state = {
            langTipVisible: false,
            menuVisible: false
        };
    }

    handleMenuClose = () => {
        this.setState({
            menuVisible: false
        });
    };

    handleMenuClick = () => {
         const { outsideClickEnabled, turnOnClickOutside } = this.props;

        this.setState({
            menuVisible: !this.state.menuVisible,
            langTipVisible: false
        });

        !outsideClickEnabled && turnOnClickOutside(this, this.handleMenuClose);
    };

    handleLangListClose = () => {
        this.setState({
            langTipVisible: false
        });
    };

    handleLangBtnClick = (event) => {
        const { outsideClickEnabled, turnOnClickOutside } = this.props;

        this.setState({
            langTipVisible: !this.state.langTipVisible,
            menuVisible: false
        });

        !outsideClickEnabled && turnOnClickOutside(this, this.handleLangListClose);
    };

    handleLangClick = lang => () => {
        this.props.setLang(lang);
    };

    render () {
        const { lang, langRoute, langMap } = this.props;
        const { langTipVisible, menuVisible } = this.state;
        const langsContainerHeight = lang.length * (LIST_ITEM_HEIGHT + LIST_ITEM_MARGIN);
        const menuContainerHeight = MENU_ITEM.length * (LIST_ITEM_HEIGHT + LIST_ITEM_MARGIN) + LIST_ITEM_MARGIN;
        
        const text = propOr('header', {}, langMap);
        const menuItems = propOr('menu', {}, langMap);

        return <React.Fragment>
        <div className={styles.root}>
            <div className={styles.wrap}>
                <div className={styles.nav}>
                    <div className={classNames(styles.navButton, { [styles.navButtonClose]: menuVisible })} onClick={this.handleMenuClick}>
                        <div className={styles.linesContainer}>
                            <div className={classNames(styles.line, styles.lineTop)}/>
                            <div className={classNames(styles.line, styles.lineMiddle)}/>
                            <div className={classNames(styles.line, styles.lineBottom)}/>
                        </div>
                    </div>
                    <div className={styles.menuList} style={{ height: `${menuVisible ? menuContainerHeight : 0}px` }}>
                        {
                            MENU_ITEM.map((link, j) => <NavLink
                                    key={j}
                                    exact={link.exact}
                                    to={`${langRoute}${link.path}`}
                                    onClick={this.handleMenuClose}
                                    style={{ right: `${menuVisible ? 0 : 10}px`, transitionDelay: `${0.15 + j * 0.05}s` }}
                                    activeClassName={styles.activeMenuItem}
                                    className={styles.menuItem}>
                                    {menuItems[link.id]}
                                </NavLink>)
                        }
                    </div>
                </div>
                <div className={styles.headerContent}>
                    <div className={styles.numbers}>
                        <a className={styles.phoneLink} href="tel:">
                            <div className={styles.phone}>{text.phone[0]}</div>
                        </a>
                        <a className={styles.phoneLink} href="tel:">
                            <div className={styles.phone}>{text.phone[1]}</div>
                        </a>
                    </div>
                    <div className={styles.contentWrap}>
                        <div className={styles.title}>{text.nameCompany}</div>
                        <div className={styles.address}>
                            <a href="https://goo.gl/maps/QanLdGkYQouL3k7x9" target='_blank' rel="noopener noreferrer" className={styles.addressLink}>
                                <div className={styles.addressDiv}>{text.addressCompanyTop}</div>
                            </a>
                            <a href="https://goo.gl/maps/QanLdGkYQouL3k7x9" target='_blank' rel="noopener noreferrer" className={styles.addressLink}>
                                <div className={styles.addressDiv}>{text.addressCompanyBottom}</div>
                            </a>
                        </div>
                        <div className={styles.langNav} onClick={this.handleLangBtnClick}>
                            <div className={styles.langBlock}>
                                <div className={styles.langs}>
                                    {lang}
                                    <div className={styles.langBtn}/>
                                    <div className={styles.tipContainer} style={{ height: `${langTipVisible ? langsContainerHeight : 0}px` }}>
                                        {LANGS.map((langItem, i) => <div
                                            key={i}
                                            onClick={this.handleLangClick(langItem)}
                                            className={classNames(styles.lang, {
                                                [styles.activeLang]: lang === langItem
                                            })}
                                            style={{ right: `${langTipVisible ? 0 : -100}px`, transitionDelay: `${0.15 + i * 0.05}s` }}
                                        >
                                            {langItem}
                                        </div>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Description blurComponent={langTipVisible || menuVisible} />
        </React.Fragment>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
