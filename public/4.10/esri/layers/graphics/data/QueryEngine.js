// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper @dojo/framework/shim/Map @dojo/framework/shim/Set ../../../geometry ../../../core/Error ../../../core/Logger ../../../core/MemCache ../../../core/promiseUtils ../../../geometry/projection ../../../geometry/support/aaBoundingRect ../../../geometry/support/normalizeUtils ../../../geometry/support/scaleUtils ../../../geometry/support/spatialReferenceUtils ./attributeSupport ./projectionSupport ./QueryEngineCapabilities ./QueryEngineResult ./spatialQuerySupport ./utils ../../../tasks/support/Query".split(" "),
function(F,G,L,H,I,J,r,M,K,m,N,p,O,z,A,q,t,P,u,v,w,y){function B(d){return d?JSON.parse(JSON.stringify(d,["latestWkid","wkid","wkt"])):d}function C(d,a,c,b,e,f,h,l){h&&!f?b.forEachFeatureInBounds(e,function(a){var b=w.getCentroid(c,a,l);a=a.attributes;b&&d.push(new D(a,null,b))}):f&&!h?b.forEachFeatureInBounds(e,function(b){var e=b.attributes,f=w.getGeometry(c,b,0,l);f&&(a.add(b.objectId),d.push(new D(e,f)))}):b.forEachFeatureInBounds(e,function(b){var e=b.attributes,f=w.getGeometry(c,b,0,l),h=w.getCentroid(c,
b,l);f&&h&&(a.add(b.objectId),d.push(new D(e,f,h)))})}Object.defineProperty(G,"__esModule",{value:!0});var Q=M.getLogger("esri.layers.graphics.data.QueryEngine"),D=function(){return function(d,a,c){this.attributes=d;this.geometry=a;this.centroid=c}}(),x={},E=new I.default,R=new K.Storage(2E6),S=0;F=function(){function d(a){var c=this;this.capabilities={query:P.queryCapabilities};this.fieldsMap=new H.default;this.geometryType=a.geometryType;this.hasM=a.hasM;this.hasZ=a.hasZ;this.objectIdField=a.objectIdField;
this.spatialReference=a.spatialReference;this.definitionExpression=a.definitionExpression;this.cacheSpatialQueries=a.cacheSpatialQueries||!1;this.gdbVersion=a.gdbVersion;this.historicMoment=a.historicMoment;this.spatialIndex=a.spatialIndex;this.spatialIndex.setEngine(this);this.timeInfo=a.timeInfo;this.cacheSpatialQueries&&(this._geometryQueryCache=new K(S++ +"$$",R));a.fields.forEach(function(a){c.fieldsMap.set(a.name.trim(),a);c.fieldsMap.set(a.name.trim().toLowerCase(),a)})}d.prototype.destroy=
function(){this.clearCache();this._geometryQueryCache&&this._geometryQueryCache.destroy();this.fieldsMap.clear()};Object.defineProperty(d.prototype,"fullExtent",{get:function(){var a=this.spatialIndex.fullBounds;return a?{xmin:a[0],ymin:a[1],xmax:a[2],ymax:a[3],spatialReference:B(this.spatialReference)}:null},enumerable:!0,configurable:!0});d.prototype.clearCache=function(){this._geometryQueryCache&&this._geometryQueryCache.clear();this._allItems=null};d.prototype.executeQuery=function(a){var c=this;
void 0===a&&(a=new y);var b=a.clone();return this._normalizeQuery(b).then(function(a){return c._checkQuerySupport(a)}).then(function(a){return c._executeGeometryQuery(a)}).then(function(a){return a.executeObjectIdsQuery(b)}).then(function(a){return a.executeAttributesQuery(b)}).catch(function(a){if(a===x)return new u.default([],c);throw a;}).then(function(a){return a.createQueryResponse(b)})};d.prototype.executeQueryForCount=function(a){var c=this;void 0===a&&(a=new y);var b=a.clone();b.returnGeometry=
!1;b.returnCentroid=!1;b.outSpatialReference=null;return this._normalizeQuery(b).then(function(a){return c._checkQuerySupport(a)}).then(function(a){return c._executeGeometryQuery(a)}).then(function(a){return a.executeObjectIdsQuery(b)}).then(function(a){return a.executeAttributesQuery(b)}).then(function(a){return a.size}).catch(function(a){if(a===x)return 0;throw a;})};d.prototype.executeQueryForExtent=function(a){var c=this;void 0===a&&(a=new y);var b=a.clone(),e=b.outSpatialReference;return this._normalizeQuery(b).then(function(a){return c._checkQuerySupport(a)}).then(function(){b.returnGeometry=
!0;b.returnCentroid=!1;b.outSpatialReference=null;return b}).then(function(a){return c._executeGeometryQuery(a)}).then(function(a){return a.executeObjectIdsQuery(b)}).then(function(a){return a.executeAttributesQuery(b)}).then(function(a){var b=a.size;if(!b)return{count:b,extent:null};var f={xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:B(c.spatialReference)};c.spatialIndex.forEachBounds(a.items,function(a){f.xmin=
Math.min(a[0],f.xmin);f.ymin=Math.min(a[1],f.ymin);f.xmax=Math.max(a[2],f.xmax);f.ymax=Math.max(a[3],f.ymax)});a=t.project(f,a.spatialReference,e);a.spatialReference=B(e&&e.toJSON()||c.spatialReference);if(0===a.xmax-a.xmin){var g=z.getMetersPerUnitForSR(a.spatialReference);a.xmin-=g;a.xmax+=g}0===a.ymax-a.ymin&&(g=z.getMetersPerUnitForSR(a.spatialReference),a.ymin-=g,a.ymax+=g);return{count:b,extent:a}}).catch(function(a){if(a===x)return{count:0,extent:null};throw a;})};d.prototype.executeQueryForIds=
function(a){var c=this;void 0===a&&(a=new y);var b=a.clone();b.returnGeometry=!1;b.returnCentroid=!1;b.outSpatialReference=null;return this._normalizeQuery(b).then(function(a){return c._checkQuerySupport(a)}).then(function(a){return c._executeGeometryQuery(a)}).then(function(a){return a.executeObjectIdsQuery(b)}).then(function(a){return a.executeAttributesQuery(b)}).then(function(a){a=a.items;for(var b=[],c=0;c<a.length;c++)b[c]=a[c].objectId;return b}).catch(function(a){if(a===x)return[];throw a;
})};d.prototype.executeTileQuery=function(a,c){var b=this,e=c.returnGeometry,f=c.returnCentroid,h=c.pixelBuffer;c=new I.default;var d=[],h=h*a.resolution,g=p.pad(a.bounds,h,p.create());C(d,c,this,this.spatialIndex,g,e,f,{originPosition:"upperLeft",scale:[a.resolution,a.resolution],translate:[a.bounds[0],a.bounds[3]]});if("esriGeometryPoint"===this.geometryType||f){var k=A.getInfo(this.spatialReference);if(k){var n=k.valid,k=n[0],n=n[1];if(g[0]<k){var m=p.fromValues(n-h,g[1],n,g[3]);C(d,c,this,this.spatialIndex,
m,e,f,{originPosition:"upperLeft",scale:[a.resolution,a.resolution],translate:[n,a.bounds[3]]})}g[2]>n&&(h=p.fromValues(k,g[1],k+h,g[3]),C(d,c,this,this.spatialIndex,h,e,f,{originPosition:"upperLeft",scale:[a.resolution,a.resolution],translate:[k-n+a.bounds[0],a.bounds[3]]}))}}d.sort(function(a,c){return a.attributes[b.objectIdField]-c.attributes[b.objectIdField]});return{features:d,objectIds:c}};d.prototype.executeTileQueryForIds=function(a,c){a=p.pad(a.bounds,c.pixelBuffer*a.resolution,p.create());
var b=[];this.spatialIndex.forEachFeatureInBounds(a,function(a){return b.push(a.objectId)});return b};d.prototype.executeQueryForLatestObservations=function(a){var c=this;if(this.timeInfo)return this.executeQuery(a).then(function(a){return c._filterLatest(a,c.timeInfo)});Q.error(new r("invalid-query","Unable to make time-based query as the underlying service does include TimeInfo"))};d.prototype._filterLatest=function(a,c){var b=c.trackIdField,e=c.startTimeField;c=c.endTimeField||e;for(var e=new H.default,
f=[],d=0,l=a.features;d<l.length;d++){var g=l[d],k=g.attributes[b],n=g.attributes[c];(!e.has(k)||e.get(k).attributes[c]<n)&&e.set(k,g)}e.forEach(function(a){return f.push(a)});return L({},a,{features:f})};d.prototype._getAll=function(){if(!this._allItems){var a=[];this.spatialIndex.forEachFeature(function(c){return a.push(c)});this._allItems=new u.default(a,this)}return this._allItems};d.prototype._normalizeQuery=function(a){var c=this,b=this.definitionExpression,e=a.where,f=a.geometry,d=a.outFields,
l=a.orderByFields,g=a.groupByFieldsForStatistics,k=a.outStatistics;a.where=e=e&&e.trim();if(!e||/^1 *= *1$/.test(e)||b&&b===e)a.where=null;if(d)for(b=0;b<d.length;b++)d[b]=d[b].trim();if(l)for(b=0;b<l.length;b++)l[b]=l[b].trim();if(g)for(b=0;b<g.length;b++)g[b]=g[b].trim();if(k)for(b=0;b<k.length;b++)k[b].onStatisticField&&(k[b].onStatisticField=k[b].onStatisticField.trim());if(!f)return m.resolve(a);a.outSpatialReference||(a.outSpatialReference=f.spatialReference);return this._getInputGeometry(a).then(function(b){return a.geometry=
b}).then(function(a){return t.checkProjectionSupport(a.spatialReference,c.spatialReference)}).then(function(){return O.normalizeCentralMeridian(a.geometry)}).then(function(a){return t.project(a[0].toJSON(),a[0].spatialReference,c.spatialReference)}).then(function(b){if(!b)throw x;b.spatialReference=c.spatialReference;return a.read({geometry:b})})};d.prototype._executeGeometryQuery=function(a){var c=this,b=a.geometry,e=a.outSpatialReference,d=a.spatialRelationship,h=A.isValid(e)&&!A.equals(this.spatialReference,
e),l=h?JSON.stringify({geometry:b,spatialRelationship:d,outSpatialReference:e}):JSON.stringify({geometry:b,spatialRelationship:d});if(this.cacheSpatialQueries){var g=this._geometryQueryCache.get(l);if(void 0!==g)return m.resolve(g)}g=null;if(b){var k=this._searchSpatialIndex(this._getQueryBBoxes(b));if(!k.length)return b=new u.default([],this),this.cacheSpatialQueries&&this._geometryQueryCache.put(l,b,b.size||1),m.resolve(b);g="envelope-intersects"===a.spatialRelationship||"esriGeometryPoint"===this.geometryType&&
v.canQueryWithRBush(b)?m.resolve(new u.default(k,this)):v.getSpatialQueryOperator(d,b,this.geometryType).then(function(a){if(a){var b=k.filter(function(b){return a(w.getGeometry(c,b))});return new u.default(b,c)}})}else g=m.resolve(this._getAll());return g.then(function(b){if(h&&(a.returnGeometry||a.returnCentroid))return b.project(e).then(function(a){c.cacheSpatialQueries&&c._geometryQueryCache.put(l,a,a.size||1);return a});c.cacheSpatialQueries&&c._geometryQueryCache.put(l,b,b.size||1);return b})};
d.prototype._getInputGeometry=function(a){var c=a.geometry,b=a.distance,e=a.units;if(null==b)return m.resolve(c);a=c.spatialReference;var d=e||z.getUnitString(a),e=null,e=a&&(a.isGeographic||a.isWebMercator)?m.resolve(c):t.checkProjectionSupport(a,J.SpatialReference.WGS84).then(function(){return N.project(c,J.SpatialReference.WGS84)});return e.then(function(a){return v.getGeodesicBufferOperator().then(function(c){return c(a,b,d)})})};d.prototype._getQueryBBoxes=function(a){if("point"===a.type)return[p.fromValues(a.x,
a.y,a.x,a.y)];a=v.canQueryWithRBush(a)?a:a.extent;switch(a.type){case "extent":return[p.fromExtent(a)];case "polygon":return a.rings.map(function(a){return p.fromValues(a[0][0],a[0][1],a[2][0],a[2][1])})}};d.prototype._searchSpatialIndex=function(a){for(var c=[],b=0;b<a.length;b++)this.spatialIndex.forEachFeatureInBounds(a[b],function(a){E.has(a)||(c.push(a),E.add(a))});E.clear();return c};d.prototype._checkQuerySupport=function(a){return 0>a.distance||null!=a.geometryPrecision||a.multipatchOption||
a.pixelSize||a.relationParameter||a.text||a.timeExtent?m.reject(new r("feature-store:unsupported-query","Unsupported query options",{query:a})):m.all([this._checkAttributesQuerySupport(a),this._checkStatisticsQuerySupport(a),v.checkSpatialQuerySupport(a,this.geometryType,this.spatialReference),t.checkProjectionSupport(this.spatialReference,a.outSpatialReference)]).then(function(){return a})};d.prototype._checkAttributesQuerySupport=function(a){var c=a.outFields,b=a.orderByFields,d=a.returnDistinctValues;
b&&0<b.length&&(b=b.map(function(a){return-1<a.indexOf(" ASC")?a.split(" ASC")[0]:-1<a.indexOf(" DESC")?a.split(" DESC")[0]:a}),q.validateFields(this.fieldsMap,b,"orderByFields contains missing fields"));if(c&&0<c.length)q.validateFields(this.fieldsMap,c,"outFields contains missing fields");else if(d)throw new r("feature-store:unsupported-query","outFields should be specified for returnDistinctValues",{query:a});q.validateWhere(this.fieldsMap,a.where)};d.prototype._checkStatisticsQuerySupport=function(a){var c=
a.outStatistics,b=a.groupByFieldsForStatistics,d=a.having,f=b&&b.length,h=c&&c.length;if(d){if(!f||!h)return m.reject(new r("feature-store:unsupported-query","outStatistics and groupByFieldsForStatistics should be specified with having",{query:a}));q.validateHaving(this.fieldsMap,d,c)}if(h&&!c.some(function(a){return"exceedslimit"===a.statisticType}))for(d=c.map(function(a){return a.onStatisticField}),q.validateFields(this.fieldsMap,d,"onStatisticFields contains missing fields"),f&&q.validateFields(this.fieldsMap,
b,"groupByFieldsForStatistics contains missing fields"),b=0;b<c.length;b++){var d=c[b],h=d.onStatisticField,l=d.statisticType;if("exceedslimit"===l)return m.reject(new r("feature-store:unsupported-query","statistic type exceedslimit is not supported",{definition:d,query:a}));if((!f||"count"!==l)&&h&&q.hasInvalidFieldType(h,this.fieldsMap))return m.reject(new r("feature-store:unsupported-query","outStatistics contains non-numeric fields",{definition:d,query:a}))}};return d}();G.default=F});