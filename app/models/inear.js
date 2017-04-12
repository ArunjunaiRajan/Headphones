import DS from 'ember-data';

export default DS.Model.extend({
title: DS.attr(),
type: DS.attr(),
rate: DS.attr(),
image: DS.attr(),
description: DS.attr()
});
