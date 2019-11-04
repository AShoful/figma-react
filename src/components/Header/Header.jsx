import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { connect } from 'react-redux';
import setLang from '../../store/actions/setLang';

import styles from './Header.module.css';
import Description from '../Description/Description'

import { LANGS } from '../../store/constants/constants';


const MENU_ITEMS = {
    ua: ['Продукція', 'Доставка', 'Про нас', 'Чому Ми', 'Контакти'],
    ru: ['Продукция', 'Доставка', 'О нас', 'Почему мы', 'Контакты']
};
const LIST_ITEM_HEIGHT = 36;
const LIST_ITEM_MARGIN = 37;
const TEXTHEADER = {
    ua: {
        nameCompany: 'ТОВ "ВКП "Укрпелетекспорт"',
        addressCompanyTop: 'с. Погреби, вул. Промислова, 12',
        addressCompanyBottom: 'Київська обл., Броварський р-н.'
    },
    ru: {
        nameCompany: 'ООО “ПКП “Укрпелетэкспорт”',
        addressCompanyTop: 'с. Погребы, ул. Промышленная, 12',
        addressCompanyBottom: 'Киевская обл., Броварской район'
    }
};
const mapStateToProps = ({ application }) => {
    return {
        langMap: application.langMap,
        lang: application.lang
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setLang: payload => dispatch(setLang(payload))
    };
};

class Header extends Component {
    static propTypes = {
        langMap: PropTypes.object.isRequired,
        lang: PropTypes.string,
        outsideClickEnabled: PropTypes.bool,
        turnOnClickOutside: PropTypes.func,
        setLang: PropTypes.func
    };

    constructor (props) {
        super(props);

        this.state = {
            langTipVisible: false,
            menuVisible: false,
            activeMenuItemIndex: 0
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

    handleLabelChecked = i => () => {
        this.setState({
            activeMenuItemIndex: i
        }, () => this.handleMenuClose() );
    };

    render () {
        const { lang } = this.props;
        const { langTipVisible, menuVisible, activeMenuItemIndex } = this.state;
        const langsContainerHeight = lang.length * (LIST_ITEM_HEIGHT + LIST_ITEM_MARGIN) + LIST_ITEM_MARGIN;
        const menuContainerHeight = MENU_ITEMS[lang].length * (LIST_ITEM_HEIGHT + LIST_ITEM_MARGIN) + LIST_ITEM_MARGIN;

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
                            MENU_ITEMS[lang].map((item, j) => <div key={item}
                                className={classNames(styles.menuItem, { [styles.activeMenuItem]: j === activeMenuItemIndex })}
                                onClick={this.handleLabelChecked(j)}
                                style={{ right: `${menuVisible ? 0 : 10}px`, transitionDelay: `${0.15 + j * 0.05}s` }}>
                                <span className={styles.underline}>{item}</span>
                            </div>
                            )
                        }
                    </div>
                </div>
                <div className={styles.headerContent}>
                    <div className={styles.numbers}>
                        <a className={styles.phoneLink} href="tel:">
                            <div> (097) 859-02-59</div>
                        </a>
                        <a className={styles.phoneLink} href="tel:">
                            <div> (066) 505-90-27</div>
                        </a>
                    </div>
                    <div className={styles.contentWrap}>
                        <div className={styles.title}>{TEXTHEADER[lang].nameCompany}</div>
                        <div className={styles.address}>
                            <a href="https://goo.gl/maps/QanLdGkYQouL3k7x9" target='_blank' rel="noopener noreferrer" className={styles.addressLink}>
                                <div className={styles.addressDiv}>{TEXTHEADER[lang].addressCompanyTop}</div>
                            </a>
                            <a href="https://goo.gl/maps/QanLdGkYQouL3k7x9" target='_blank' rel="noopener noreferrer" className={styles.addressLink}>
                                <div className={styles.addressDiv}>{TEXTHEADER[lang].addressCompanyBottom}</div>
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
