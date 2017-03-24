var MainPageLayout;

MainPageLayout = require('./tklayout');

module.exports = {
  appRegion: 'body',
  layout: MainPageLayout,
  layoutOptions: {},
  useMessages: true,
  useNavbar: true,
  brand: {
    label: 'Tk-Test',
    url: '#'
  },
  frontdoorApplet: 'frontdoor',
  hasUser: false,
  userMenuApp: void 0,
  needLogin: false,
  loginUrl: '/#frontdoor/login',
  guestUserName: 'Guest',
  navbarEntries: [],
  appletRoutes: {
    pages: 'frontdoor'
  }
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS10a2FwcC1jb25maWcuanMiLCJzb3VyY2VzIjpbImJhc2UtdGthcHAtY29uZmlnLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOztBQUFBLGNBQUEsR0FBaUIsT0FBQSxDQUFRLFlBQVI7O0FBRWpCLE1BQU0sQ0FBQyxPQUFQLEdBR0U7RUFBQSxTQUFBLEVBQVcsTUFBWDtFQUVBLE1BQUEsRUFBUSxjQUZSO0VBS0EsYUFBQSxFQUFlLEVBTGY7RUFRQSxXQUFBLEVBQWEsSUFSYjtFQVdBLFNBQUEsRUFBVyxJQVhYO0VBYUEsS0FBQSxFQUNFO0lBQUEsS0FBQSxFQUFPLFNBQVA7SUFDQSxHQUFBLEVBQUssR0FETDtHQWRGO0VBa0JBLGVBQUEsRUFBaUIsV0FsQmpCO0VBdUJBLE9BQUEsRUFBUyxLQXZCVDtFQTBCQSxXQUFBLEVBQWEsTUExQmI7RUErQkEsU0FBQSxFQUFXLEtBL0JYO0VBa0NBLFFBQUEsRUFBVSxtQkFsQ1Y7RUFtQ0EsYUFBQSxFQUFlLE9BbkNmO0VBc0NBLGFBQUEsRUFBZSxFQXRDZjtFQTRDQSxZQUFBLEVBQ0U7SUFBQSxLQUFBLEVBQU8sV0FBUDtHQTdDRiIsInNvdXJjZXNDb250ZW50IjpbIk1haW5QYWdlTGF5b3V0ID0gcmVxdWlyZSAnLi90a2xheW91dCdcblxubW9kdWxlLmV4cG9ydHMgPVxuICAjIFRoaXMgaXMgdGhlIGh0bWwgZWxlbWVudCB0byBhdHRhY2hcbiAgIyB0aGUgYXBwLiAgVGhpcyBpcyB0byBiZSBtYXJpb25ldHRlIFJlZ2lvblxuICBhcHBSZWdpb246ICdib2R5J1xuICAjIFRoaXMgaXMgYSBtYXJpb25ldHRlIHZpZXcgd2l0aCByZWdpb25zXG4gIGxheW91dDogTWFpblBhZ2VMYXlvdXRcbiAgIyBoZXJlIHlvdSBjYW4gc2V0IG9wdGlvbnMgdG8gYmUgcGFzc2VkXG4gICMgdG8gdGhlIGxheW91dFxuICBsYXlvdXRPcHRpb25zOiB7fVxuICAjIHNldCB0aGlzIHRvIGZhbHNlIGlmIHlvdSBkb24ndCBuZWVkXG4gICMgbWVzc2FnZXNcbiAgdXNlTWVzc2FnZXM6IHRydWVcbiAgIyBzZXQgdXNlTmF2YmFyIHRvIGZhbHNlIHRvIHNraXBcbiAgIyB1c2luZyBhIG5hdmJhciBpbiB0aGUgYXBwXG4gIHVzZU5hdmJhcjogdHJ1ZVxuICAjIHRoaXMgaXMgdGhlIGJyYW5kIGVudHJ5IGZvciB0aGUgbmF2YmFyXG4gIGJyYW5kOlxuICAgIGxhYmVsOiAnVGstVGVzdCdcbiAgICB1cmw6ICcjJ1xuICAjIGFwcGxldCB0byBiZSB1c2VkIGZvciBmcm9udGRvb3JcbiAgIyBcbiAgZnJvbnRkb29yQXBwbGV0OiAnZnJvbnRkb29yJ1xuXG4gICMgRG9lcyB0aGUgYXBwbGljYXRpb24gaGF2ZSBhIHVzZXI/XG4gICMgSWYgdGhpcyBpcyB0cnVlLCBhIHVzZXJNZW51QXBwIG11c3QgYmUgc2V0XG4gICMgdG8gYSB0b29sa2l0IEFwcFxuICBoYXNVc2VyOiBmYWxzZVxuXG4gICMgSWYgdGhlcmUgaXMgYSB1c2VyLCBwcm92aWRlIGEgdXNlciBtZW51IGFwcFxuICB1c2VyTWVudUFwcDogdW5kZWZpbmVkXG4gIFxuICAjIGlmIG5lZWRMb2dpbiBpcyB0cnVlLCBmcm9udGRvb3JBcHBsZXQgc2hvdWxkXG4gICMgcHJvdmlkZSBhICNmcm9udGRvb3IvbG9naW4gcm91dGUgd2hpY2ggd2lsbFxuICAjIGJlIGRpc3BsYXllZCBieSBkZWZhdWx0XG4gIG5lZWRMb2dpbjogZmFsc2VcblxuICAjIHRoZSB1cmwgZm9yIGxvZ2luXG4gIGxvZ2luVXJsOiAnLyNmcm9udGRvb3IvbG9naW4nXG4gIGd1ZXN0VXNlck5hbWU6ICdHdWVzdCdcbiAgXG4gICMgbmF2YmFyIGVudHJpZXMgaXMgYW4gYXJyYXkgb2Ygb2JqZWN0c1xuICBuYXZiYXJFbnRyaWVzOiBbXVxuICAjIGFwcGxldFJvdXRlcyBsZXRzIHlvdSBwbGFjZVxuICAjIHRoZSBhcHBsZXQgbmFtZSBhcyBhIHByb3BlcnR5XG4gICMgd2l0aCB0aGUgYXBwbGV0IGRpcmVjdG9yeSBuYW1lXG4gICMgYXMgYSB2YWx1ZS4gIFRoZSBBcHBSb3V0ZXIgc2hvdWxkXG4gICMgcmVzcG9uZCB0byBwcm9wZXJ0eSBwcmVmaXhlcyB1cmxzLlxuICBhcHBsZXRSb3V0ZXM6XG4gICAgcGFnZXM6ICdmcm9udGRvb3InXG4gICAgXG4iXX0=